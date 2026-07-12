/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Potatoes & Starchy Vegetables",
  "defaultMeasure": "1-whole",
  "description": "Other starchy vegetables",
  "id": "usda-fndds-2709558",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 235.0,
      "key": "1-whole",
      "kind": "unit",
      "label": "1 whole"
    },
    {
      "gramsPerUnit": 200.0,
      "key": "1-cup",
      "kind": "unit",
      "label": "1 cup"
    },
    {
      "gramsPerUnit": 200.0,
      "key": "1-cup-mashed",
      "kind": "unit",
      "label": "1 cup, mashed"
    },
    {
      "gramsPerUnit": 100.0,
      "key": "quantity-not-specified",
      "kind": "unit",
      "label": "Quantity not specified"
    },
    {
      "gramsPerUnit": 25.0,
      "key": "1-slice",
      "kind": "unit",
      "label": "1 slice"
    }
  ],
  "name": "Plantain, cooked, no added fat",
  "nutritionPerBasis": {
    "calcium_mg": 3.0,
    "carbs_g": 31.8,
    "energy_kcal": 122.0,
    "fat_g": 0.35,
    "fibre_g": 1.7,
    "folate_ug": 19.0,
    "iron_mg": 0.55,
    "magnesium_mg": 36.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 32.0,
    "potassium_mg": 486.0,
    "protein_g": 1.3,
    "salt_g": 0.3,
    "sat_fat_g": 0.0,
    "sodium_mg": 120.0,
    "sugar_g": 17.5,
    "vitamin_a_ug": 53.0,
    "vitamin_c_mg": 15.6,
    "vitamin_e_mg": 0.0,
    "vitamin_k_ug": 28.7
  },
  "source": "USDA FNDDS 2021-2023",
  "sourceId": "2709558",
  "state": "Cooked",
  "subcategory": "Other starchy vegetables",
  "tags": [
    "cooked",
    "other-starchy-vegetables",
    "potatoes-and-starchy-vegetables"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
