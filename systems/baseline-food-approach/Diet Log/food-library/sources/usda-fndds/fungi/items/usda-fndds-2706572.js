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
  "id": "usda-fndds-2706572",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 310.0,
      "key": "quantity-not-specified",
      "kind": "unit",
      "label": "Quantity not specified"
    },
    {
      "gramsPerUnit": 248.0,
      "key": "1-cup",
      "kind": "unit",
      "label": "1 cup"
    }
  ],
  "name": "Tuna and rice with mushroom sauce",
  "nutritionPerBasis": {
    "calcium_mg": 22.0,
    "carbs_g": 15.4,
    "energy_kcal": 128.0,
    "fat_g": 5.17,
    "fibre_g": 0.4,
    "folate_ug": 28.0,
    "iron_mg": 0.84,
    "magnesium_mg": 11.0,
    "omega3_g": 0.031,
    "phosphorus_mg": 55.0,
    "potassium_mg": 73.0,
    "protein_g": 4.57,
    "salt_g": 0.745,
    "sat_fat_g": 0.883,
    "sodium_mg": 298.0,
    "sugar_g": 0.59,
    "vitamin_a_ug": 8.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 0.82,
    "vitamin_k_ug": 8.7
  },
  "source": "USDA FNDDS 2021-2023",
  "sourceId": "2706572",
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
