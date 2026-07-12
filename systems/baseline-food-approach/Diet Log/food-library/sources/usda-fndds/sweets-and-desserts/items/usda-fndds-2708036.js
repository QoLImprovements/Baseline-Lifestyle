/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Sweets & Desserts",
  "defaultMeasure": "1-crepe-with-filling-any-size",
  "description": "Pancakes, waffles, French toast",
  "id": "usda-fndds-2708036",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 80.0,
      "key": "1-crepe-with-filling-any-size",
      "kind": "unit",
      "label": "1 crepe with filling, any size"
    },
    {
      "gramsPerUnit": 80.0,
      "key": "quantity-not-specified",
      "kind": "unit",
      "label": "Quantity not specified"
    },
    {
      "gramsPerUnit": 1.6,
      "key": "1-surface-inch",
      "kind": "unit",
      "label": "1 surface inch"
    }
  ],
  "name": "Crepe, chocolate filled",
  "nutritionPerBasis": {
    "calcium_mg": 69.0,
    "carbs_g": 22.9,
    "energy_kcal": 170.0,
    "fat_g": 6.52,
    "fibre_g": 0.2,
    "folate_ug": 20.0,
    "iron_mg": 1.52,
    "magnesium_mg": 18.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 95.0,
    "potassium_mg": 178.0,
    "protein_g": 4.87,
    "salt_g": 0.5475,
    "sat_fat_g": 1.85,
    "sodium_mg": 219.0,
    "sugar_g": 12.2,
    "vitamin_a_ug": 66.0,
    "vitamin_c_mg": 0.2,
    "vitamin_e_mg": 0.54,
    "vitamin_k_ug": 2.4
  },
  "source": "USDA FNDDS 2021-2023",
  "sourceId": "2708036",
  "state": "Unspecified",
  "subcategory": "Pancakes, waffles, French toast",
  "tags": [
    "pancakes-waffles-french-toast",
    "sweets-and-desserts",
    "unspecified"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
