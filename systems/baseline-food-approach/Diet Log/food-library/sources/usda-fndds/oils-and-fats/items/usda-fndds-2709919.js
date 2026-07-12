/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Oils & Fats",
  "defaultMeasure": "1-regular-ear",
  "description": "Corn",
  "id": "usda-fndds-2709919",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 108.0,
      "key": "1-regular-ear",
      "kind": "unit",
      "label": "1 regular ear"
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
    },
    {
      "gramsPerUnit": 57.0,
      "key": "1-mini-ear",
      "kind": "unit",
      "label": "1 mini ear"
    },
    {
      "gramsPerUnit": 85.0,
      "key": "quantity-not-specified",
      "kind": "unit",
      "label": "Quantity not specified"
    }
  ],
  "name": "Corn, frozen, cooked with oil",
  "nutritionPerBasis": {
    "calcium_mg": 3.0,
    "carbs_g": 18.7,
    "energy_kcal": 105.0,
    "fat_g": 3.55,
    "fibre_g": 2.3,
    "folate_ug": 34.0,
    "iron_mg": 0.46,
    "magnesium_mg": 27.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 76.0,
    "potassium_mg": 226.0,
    "protein_g": 2.47,
    "salt_g": 0.2825,
    "sat_fat_g": 0.488,
    "sodium_mg": 113.0,
    "sugar_g": 2.97,
    "vitamin_a_ug": 10.0,
    "vitamin_c_mg": 3.4,
    "vitamin_e_mg": 0.62,
    "vitamin_k_ug": 3.2
  },
  "source": "USDA FNDDS 2021-2023",
  "sourceId": "2709919",
  "state": "Frozen",
  "subcategory": "Corn",
  "tags": [
    "corn",
    "frozen",
    "oils-and-fats"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
