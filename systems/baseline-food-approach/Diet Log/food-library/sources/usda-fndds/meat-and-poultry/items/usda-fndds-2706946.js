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
  "id": "usda-fndds-2706946",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 135.0,
      "key": "1-sandwich-any-size",
      "kind": "unit",
      "label": "1 sandwich, any size"
    },
    {
      "gramsPerUnit": 135.0,
      "key": "quantity-not-specified",
      "kind": "unit",
      "label": "Quantity not specified"
    }
  ],
  "name": "Meatloaf sandwich",
  "nutritionPerBasis": {
    "calcium_mg": 124.0,
    "carbs_g": 28.7,
    "energy_kcal": 217.0,
    "fat_g": 6.15,
    "fibre_g": 1.3,
    "folate_ug": 60.0,
    "iron_mg": 2.42,
    "magnesium_mg": 22.0,
    "omega3_g": 0.001,
    "phosphorus_mg": 125.0,
    "potassium_mg": 204.0,
    "protein_g": 11.8,
    "salt_g": 1.235,
    "sat_fat_g": 2.04,
    "sodium_mg": 494.0,
    "sugar_g": 5.9,
    "vitamin_a_ug": 9.0,
    "vitamin_c_mg": 0.8,
    "vitamin_e_mg": 0.35,
    "vitamin_k_ug": 0.9
  },
  "source": "USDA FNDDS 2021-2023",
  "sourceId": "2706946",
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
