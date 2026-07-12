/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Vegetables",
  "defaultMeasure": "1-piece",
  "description": "Other vegetables and combinations",
  "id": "usda-fndds-2709897",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 13.0,
      "key": "1-piece",
      "kind": "unit",
      "label": "1 piece"
    },
    {
      "gramsPerUnit": 78.0,
      "key": "quantity-not-specified",
      "kind": "unit",
      "label": "Quantity not specified"
    },
    {
      "gramsPerUnit": 155.0,
      "key": "1-cup",
      "kind": "unit",
      "label": "1 cup"
    },
    {
      "gramsPerUnit": 13.0,
      "key": "1-floweret",
      "kind": "unit",
      "label": "1 floweret"
    }
  ],
  "name": "Cauliflower, fresh, cooked, no added fat",
  "nutritionPerBasis": {
    "calcium_mg": 23.0,
    "carbs_g": 5.16,
    "energy_kcal": 26.0,
    "fat_g": 0.29,
    "fibre_g": 2.1,
    "folate_ug": 50.0,
    "iron_mg": 0.44,
    "magnesium_mg": 16.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 46.0,
    "potassium_mg": 311.0,
    "protein_g": 1.99,
    "salt_g": 0.38,
    "sat_fat_g": 0.135,
    "sodium_mg": 152.0,
    "sugar_g": 1.98,
    "vitamin_a_ug": 0.0,
    "vitamin_c_mg": 42.5,
    "vitamin_e_mg": 0.08,
    "vitamin_k_ug": 16.1
  },
  "source": "USDA FNDDS 2021-2023",
  "sourceId": "2709897",
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
