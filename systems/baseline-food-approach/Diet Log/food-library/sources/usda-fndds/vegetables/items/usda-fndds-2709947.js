/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Vegetables",
  "defaultMeasure": "quantity-not-specified",
  "description": "Other vegetables and combinations",
  "id": "usda-fndds-2709947",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 83.0,
      "key": "quantity-not-specified",
      "kind": "unit",
      "label": "Quantity not specified"
    },
    {
      "gramsPerUnit": 165.0,
      "key": "1-cup",
      "kind": "unit",
      "label": "1 cup"
    },
    {
      "gramsPerUnit": 10.0,
      "key": "1-pod",
      "kind": "unit",
      "label": "1 pod"
    }
  ],
  "name": "Okra, fresh, cooked, fat added",
  "nutritionPerBasis": {
    "calcium_mg": 86.0,
    "carbs_g": 7.76,
    "energy_kcal": 59.0,
    "fat_g": 2.94,
    "fibre_g": 3.3,
    "folate_ug": 53.0,
    "iron_mg": 0.65,
    "magnesium_mg": 59.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 64.0,
    "potassium_mg": 312.0,
    "protein_g": 2.02,
    "salt_g": 0.3425,
    "sat_fat_g": 0.743,
    "sodium_mg": 137.0,
    "sugar_g": 1.55,
    "vitamin_a_ug": 48.0,
    "vitamin_c_mg": 20.4,
    "vitamin_e_mg": 0.69,
    "vitamin_k_ug": 34.8
  },
  "source": "USDA FNDDS 2021-2023",
  "sourceId": "2709947",
  "state": "Cooked",
  "subcategory": "Other vegetables and combinations",
  "tags": [
    "cooked",
    "other-vegetables-and-combinations",
    "vegetables"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
