/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Oils & Fats",
  "defaultMeasure": "quantity-not-specified",
  "description": "Corn",
  "id": "usda-fndds-2709921",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 85.0,
      "key": "quantity-not-specified",
      "kind": "unit",
      "label": "Quantity not specified"
    },
    {
      "gramsPerUnit": 170.0,
      "key": "1-cup",
      "kind": "unit",
      "label": "1 cup"
    },
    {
      "gramsPerUnit": 8.0,
      "key": "1-baby-corn",
      "kind": "unit",
      "label": "1 baby corn"
    }
  ],
  "name": "Corn, canned, cooked with oil",
  "nutritionPerBasis": {
    "calcium_mg": 3.0,
    "carbs_g": 13.9,
    "energy_kcal": 91.0,
    "fat_g": 4.1,
    "fibre_g": 1.9,
    "folate_ug": 36.0,
    "iron_mg": 0.27,
    "magnesium_mg": 13.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 45.0,
    "potassium_mg": 128.0,
    "protein_g": 2.22,
    "salt_g": 0.4975,
    "sat_fat_g": 0.627,
    "sodium_mg": 199.0,
    "sugar_g": 4.31,
    "vitamin_a_ug": 2.0,
    "vitamin_c_mg": 1.6,
    "vitamin_e_mg": 0.64,
    "vitamin_k_ug": 2.9
  },
  "source": "USDA FNDDS 2021-2023",
  "sourceId": "2709921",
  "state": "Canned",
  "subcategory": "Corn",
  "tags": [
    "canned",
    "corn",
    "oils-and-fats"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
