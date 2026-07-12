/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Meat & Poultry",
  "defaultMeasure": "quantity-not-specified",
  "description": "Eggs and omelets",
  "id": "usda-fndds-2707177",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 144.0,
      "key": "quantity-not-specified",
      "kind": "unit",
      "label": "Quantity not specified"
    },
    {
      "gramsPerUnit": 144.0,
      "key": "1-egg",
      "kind": "unit",
      "label": "1 egg"
    }
  ],
  "name": "Goose egg, cooked",
  "nutritionPerBasis": {
    "calcium_mg": 57.0,
    "carbs_g": 1.27,
    "energy_kcal": 224.0,
    "fat_g": 18.1,
    "fibre_g": 0.0,
    "folate_ug": 53.0,
    "iron_mg": 3.4,
    "magnesium_mg": 15.0,
    "omega3_g": 0.001,
    "phosphorus_mg": 194.0,
    "potassium_mg": 197.0,
    "protein_g": 12.9,
    "salt_g": 0.64,
    "sat_fat_g": 4.85,
    "sodium_mg": 256.0,
    "sugar_g": 0.89,
    "vitamin_a_ug": 200.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 2.06,
    "vitamin_k_ug": 5.1
  },
  "source": "USDA FNDDS 2021-2023",
  "sourceId": "2707177",
  "state": "Cooked",
  "subcategory": "Eggs and omelets",
  "tags": [
    "cooked",
    "eggs-and-omelets",
    "meat-and-poultry"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
