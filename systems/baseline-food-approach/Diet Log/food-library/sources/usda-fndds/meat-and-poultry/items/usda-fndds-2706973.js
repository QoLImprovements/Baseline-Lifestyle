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
  "id": "usda-fndds-2706973",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 190.0,
      "key": "1-sandwich-any-size",
      "kind": "unit",
      "label": "1 sandwich, any size"
    },
    {
      "gramsPerUnit": 190.0,
      "key": "quantity-not-specified",
      "kind": "unit",
      "label": "Quantity not specified"
    }
  ],
  "name": "Cuban sandwich",
  "nutritionPerBasis": {
    "calcium_mg": 159.0,
    "carbs_g": 16.3,
    "energy_kcal": 228.0,
    "fat_g": 10.7,
    "fibre_g": 0.8,
    "folate_ug": 32.0,
    "iron_mg": 1.75,
    "magnesium_mg": 22.0,
    "omega3_g": 0.004,
    "phosphorus_mg": 197.0,
    "potassium_mg": 212.0,
    "protein_g": 15.9,
    "salt_g": 1.3825,
    "sat_fat_g": 4.38,
    "sodium_mg": 553.0,
    "sugar_g": 2.46,
    "vitamin_a_ug": 33.0,
    "vitamin_c_mg": 0.6,
    "vitamin_e_mg": 0.3,
    "vitamin_k_ug": 3.8
  },
  "source": "USDA FNDDS 2021-2023",
  "sourceId": "2706973",
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
