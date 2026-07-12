/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Fungi",
  "defaultMeasure": "quantity-not-specified",
  "description": "Seafood mixed dishes",
  "id": "usda-fndds-2706576",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 280.0,
      "key": "quantity-not-specified",
      "kind": "unit",
      "label": "Quantity not specified"
    },
    {
      "gramsPerUnit": 224.0,
      "key": "1-cup",
      "kind": "unit",
      "label": "1 cup"
    }
  ],
  "name": "Fish and noodles with mushroom sauce",
  "nutritionPerBasis": {
    "calcium_mg": 24.0,
    "carbs_g": 14.8,
    "energy_kcal": 131.0,
    "fat_g": 5.11,
    "fibre_g": 0.8,
    "folate_ug": 43.0,
    "iron_mg": 0.85,
    "magnesium_mg": 19.0,
    "omega3_g": 0.026,
    "phosphorus_mg": 75.0,
    "potassium_mg": 89.0,
    "protein_g": 6.3,
    "salt_g": 0.78,
    "sat_fat_g": 0.93,
    "sodium_mg": 312.0,
    "sugar_g": 0.79,
    "vitamin_a_ug": 11.0,
    "vitamin_c_mg": 0.2,
    "vitamin_e_mg": 0.77,
    "vitamin_k_ug": 8.0
  },
  "source": "USDA FNDDS 2021-2023",
  "sourceId": "2706576",
  "state": "Unspecified",
  "subcategory": "Seafood mixed dishes",
  "tags": [
    "fungi",
    "seafood-mixed-dishes",
    "unspecified"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
