/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Other Foods",
  "defaultMeasure": "1-regular-ear",
  "description": "Corn",
  "id": "usda-fndds-2709910",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 105.0,
      "key": "1-regular-ear",
      "kind": "unit",
      "label": "1 regular ear"
    },
    {
      "gramsPerUnit": 55.0,
      "key": "1-mini-ear",
      "kind": "unit",
      "label": "1 mini ear"
    },
    {
      "gramsPerUnit": 165.0,
      "key": "1-cup",
      "kind": "unit",
      "label": "1 cup"
    },
    {
      "gramsPerUnit": 83.0,
      "key": "quantity-not-specified",
      "kind": "unit",
      "label": "Quantity not specified"
    },
    {
      "gramsPerUnit": 8.0,
      "key": "1-baby-corn",
      "kind": "unit",
      "label": "1 baby corn"
    }
  ],
  "name": "Corn, fresh, cooked, no added fat",
  "nutritionPerBasis": {
    "calcium_mg": 2.0,
    "carbs_g": 18.6,
    "energy_kcal": 86.0,
    "fat_g": 1.35,
    "fibre_g": 2.0,
    "folate_ug": 36.0,
    "iron_mg": 0.52,
    "magnesium_mg": 37.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 89.0,
    "potassium_mg": 269.0,
    "protein_g": 3.26,
    "salt_g": 0.3275,
    "sat_fat_g": 0.324,
    "sodium_mg": 131.0,
    "sugar_g": 6.24,
    "vitamin_a_ug": 9.0,
    "vitamin_c_mg": 5.8,
    "vitamin_e_mg": 0.07,
    "vitamin_k_ug": 0.3
  },
  "source": "USDA FNDDS 2021-2023",
  "sourceId": "2709910",
  "state": "Cooked",
  "subcategory": "Corn",
  "tags": [
    "cooked",
    "corn",
    "other-foods"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
