/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Meat & Poultry",
  "defaultMeasure": "1-sandwich-any-size",
  "description": "Meat and BBQ sandwiches",
  "id": "usda-fndds-2706884",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 185.0,
      "key": "1-sandwich-any-size",
      "kind": "unit",
      "label": "1 sandwich, any size"
    },
    {
      "gramsPerUnit": 185.0,
      "key": "quantity-not-specified",
      "kind": "unit",
      "label": "Quantity not specified"
    }
  ],
  "name": "Sloppy joe sandwich, on wheat bun",
  "nutritionPerBasis": {
    "calcium_mg": 65.0,
    "carbs_g": 18.4,
    "energy_kcal": 180.0,
    "fat_g": 6.44,
    "fibre_g": 2.2,
    "folate_ug": 30.0,
    "iron_mg": 2.15,
    "magnesium_mg": 30.0,
    "omega3_g": 0.002,
    "phosphorus_mg": 122.0,
    "potassium_mg": 253.0,
    "protein_g": 11.8,
    "salt_g": 0.8575,
    "sat_fat_g": 2.2,
    "sodium_mg": 343.0,
    "sugar_g": 4.26,
    "vitamin_a_ug": 7.0,
    "vitamin_c_mg": 5.5,
    "vitamin_e_mg": 0.56,
    "vitamin_k_ug": 3.3
  },
  "source": "USDA FNDDS 2021-2023",
  "sourceId": "2706884",
  "state": "Unspecified",
  "subcategory": "Meat and BBQ sandwiches",
  "tags": [
    "meat-and-bbq-sandwiches",
    "meat-and-poultry",
    "unspecified"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
