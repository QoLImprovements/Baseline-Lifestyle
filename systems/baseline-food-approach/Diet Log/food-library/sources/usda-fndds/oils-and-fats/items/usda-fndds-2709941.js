/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Oils & Fats",
  "defaultMeasure": "1-piece-slice",
  "description": "Other vegetables and combinations",
  "id": "usda-fndds-2709941",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 6.0,
      "key": "1-piece-slice",
      "kind": "unit",
      "label": "1 piece/slice"
    },
    {
      "gramsPerUnit": 80.0,
      "key": "quantity-not-specified",
      "kind": "unit",
      "label": "Quantity not specified"
    },
    {
      "gramsPerUnit": 13.0,
      "key": "1-whole",
      "kind": "unit",
      "label": "1 whole"
    },
    {
      "gramsPerUnit": 160.0,
      "key": "1-cup",
      "kind": "unit",
      "label": "1 cup"
    }
  ],
  "name": "Mushrooms, fresh, cooked with oil",
  "nutritionPerBasis": {
    "calcium_mg": 6.0,
    "carbs_g": 5.0,
    "energy_kcal": 70.0,
    "fat_g": 4.05,
    "fibre_g": 2.1,
    "folate_ug": 36.0,
    "iron_mg": 0.28,
    "magnesium_mg": 12.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 113.0,
    "potassium_mg": 449.0,
    "protein_g": 3.5,
    "salt_g": 0.37,
    "sat_fat_g": 0.546,
    "sodium_mg": 148.0,
    "sugar_g": 2.4,
    "vitamin_a_ug": 0.0,
    "vitamin_c_mg": 2.2,
    "vitamin_e_mg": 0.7,
    "vitamin_k_ug": 3.6
  },
  "source": "USDA FNDDS 2021-2023",
  "sourceId": "2709941",
  "state": "Cooked",
  "subcategory": "Other vegetables and combinations",
  "tags": [
    "cooked",
    "oils-and-fats",
    "other-vegetables-and-combinations"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
