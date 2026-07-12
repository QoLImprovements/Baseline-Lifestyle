/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Fungi",
  "defaultMeasure": "1-cup",
  "description": "Seafood mixed dishes",
  "id": "usda-fndds-2706555",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 224.0,
      "key": "1-cup",
      "kind": "unit",
      "label": "1 cup"
    },
    {
      "gramsPerUnit": 280.0,
      "key": "quantity-not-specified",
      "kind": "unit",
      "label": "Quantity not specified"
    }
  ],
  "name": "Shrimp and noodles with mushroom sauce",
  "nutritionPerBasis": {
    "calcium_mg": 35.0,
    "carbs_g": 15.0,
    "energy_kcal": 133.0,
    "fat_g": 5.24,
    "fibre_g": 0.8,
    "folate_ug": 45.0,
    "iron_mg": 0.82,
    "magnesium_mg": 18.0,
    "omega3_g": 0.043,
    "phosphorus_mg": 99.0,
    "potassium_mg": 78.0,
    "protein_g": 6.31,
    "salt_g": 0.565,
    "sat_fat_g": 0.984,
    "sodium_mg": 226.0,
    "sugar_g": 0.79,
    "vitamin_a_ug": 22.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 0.98,
    "vitamin_k_ug": 8.1
  },
  "source": "USDA FNDDS 2021-2023",
  "sourceId": "2706555",
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
