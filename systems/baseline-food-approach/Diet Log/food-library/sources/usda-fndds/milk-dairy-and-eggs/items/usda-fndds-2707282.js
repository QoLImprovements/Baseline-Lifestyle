/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Milk, Dairy & Eggs",
  "defaultMeasure": "quantity-not-specified",
  "description": "Ramen and Asian broth-based soups",
  "id": "usda-fndds-2707282",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 245.0,
      "key": "quantity-not-specified",
      "kind": "unit",
      "label": "Quantity not specified"
    },
    {
      "gramsPerUnit": 245.0,
      "key": "1-cup",
      "kind": "unit",
      "label": "1 cup"
    }
  ],
  "name": "Soup, egg drop",
  "nutritionPerBasis": {
    "calcium_mg": 7.0,
    "carbs_g": 4.29,
    "energy_kcal": 27.0,
    "fat_g": 0.61,
    "fibre_g": 0.4,
    "folate_ug": 7.0,
    "iron_mg": 0.26,
    "magnesium_mg": 2.0,
    "omega3_g": 0.001,
    "phosphorus_mg": 15.0,
    "potassium_mg": 22.0,
    "protein_g": 1.16,
    "salt_g": 0.925,
    "sat_fat_g": 0.166,
    "sodium_mg": 370.0,
    "sugar_g": 0.09,
    "vitamin_a_ug": 20.0,
    "vitamin_c_mg": 6.5,
    "vitamin_e_mg": 0.13,
    "vitamin_k_ug": 1.2
  },
  "source": "USDA FNDDS 2021-2023",
  "sourceId": "2707282",
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
