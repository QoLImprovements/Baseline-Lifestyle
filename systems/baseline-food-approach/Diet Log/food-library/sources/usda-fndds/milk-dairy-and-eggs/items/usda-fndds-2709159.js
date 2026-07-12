/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Milk, Dairy & Eggs",
  "defaultMeasure": "1-cup",
  "description": "Ramen and Asian broth-based soups",
  "id": "usda-fndds-2709159",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 245.0,
      "key": "1-cup",
      "kind": "unit",
      "label": "1 cup"
    },
    {
      "gramsPerUnit": 245.0,
      "key": "quantity-not-specified",
      "kind": "unit",
      "label": "Quantity not specified"
    }
  ],
  "name": "Ramen bowl, vegetarian with egg",
  "nutritionPerBasis": {
    "calcium_mg": 31.0,
    "carbs_g": 14.1,
    "energy_kcal": 112.0,
    "fat_g": 3.99,
    "fibre_g": 1.0,
    "folate_ug": 50.0,
    "iron_mg": 0.97,
    "magnesium_mg": 14.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 59.0,
    "potassium_mg": 71.0,
    "protein_g": 4.85,
    "salt_g": 0.805,
    "sat_fat_g": 0.748,
    "sodium_mg": 322.0,
    "sugar_g": 0.51,
    "vitamin_a_ug": 30.0,
    "vitamin_c_mg": 2.8,
    "vitamin_e_mg": 0.56,
    "vitamin_k_ug": 13.4
  },
  "source": "USDA FNDDS 2021-2023",
  "sourceId": "2709159",
  "state": "Unspecified",
  "subcategory": "Ramen and Asian broth-based soups",
  "tags": [
    "milk-dairy-and-eggs",
    "ramen-and-asian-broth-based-soups",
    "unspecified"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
