/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Meat & Poultry",
  "defaultMeasure": "quantity-not-specified",
  "description": "Meat and BBQ sandwiches",
  "id": "usda-fndds-2706883",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 185.0,
      "key": "quantity-not-specified",
      "kind": "unit",
      "label": "Quantity not specified"
    },
    {
      "gramsPerUnit": 185.0,
      "key": "1-sandwich-any-size",
      "kind": "unit",
      "label": "1 sandwich, any size"
    }
  ],
  "name": "Sloppy joe sandwich, on white bun",
  "nutritionPerBasis": {
    "calcium_mg": 59.0,
    "carbs_g": 20.0,
    "energy_kcal": 185.0,
    "fat_g": 6.42,
    "fibre_g": 1.1,
    "folate_ug": 37.0,
    "iron_mg": 2.24,
    "magnesium_mg": 19.0,
    "omega3_g": 0.001,
    "phosphorus_mg": 101.0,
    "potassium_mg": 232.0,
    "protein_g": 11.3,
    "salt_g": 0.9,
    "sat_fat_g": 2.24,
    "sodium_mg": 360.0,
    "sugar_g": 4.94,
    "vitamin_a_ug": 7.0,
    "vitamin_c_mg": 5.9,
    "vitamin_e_mg": 0.54,
    "vitamin_k_ug": 3.0
  },
  "source": "USDA FNDDS 2021-2023",
  "sourceId": "2706883",
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
