/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Other Foods",
  "defaultMeasure": "1-cup",
  "description": "Corn",
  "id": "usda-fndds-2709912",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
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
  "name": "Corn, canned, cooked, no added fat",
  "nutritionPerBasis": {
    "calcium_mg": 3.0,
    "carbs_g": 14.3,
    "energy_kcal": 67.0,
    "fat_g": 1.22,
    "fibre_g": 2.0,
    "folate_ug": 37.0,
    "iron_mg": 0.27,
    "magnesium_mg": 13.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 46.0,
    "potassium_mg": 132.0,
    "protein_g": 2.29,
    "salt_g": 0.5125,
    "sat_fat_g": 0.245,
    "sodium_mg": 205.0,
    "sugar_g": 4.44,
    "vitamin_a_ug": 2.0,
    "vitamin_c_mg": 1.6,
    "vitamin_e_mg": 0.09,
    "vitamin_k_ug": 0.0
  },
  "source": "USDA FNDDS 2021-2023",
  "sourceId": "2709912",
  "state": "Canned",
  "subcategory": "Corn",
  "tags": [
    "canned",
    "corn",
    "other-foods"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
