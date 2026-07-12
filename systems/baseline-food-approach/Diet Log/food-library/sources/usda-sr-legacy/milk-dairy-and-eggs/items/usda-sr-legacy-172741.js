/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Milk, Dairy & Eggs",
  "defaultMeasure": "0-5-oz",
  "description": "Baked Products",
  "id": "usda-sr-legacy-172741",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 14.2,
      "key": "0-5-oz",
      "kind": "unit",
      "label": "0.5 oz"
    },
    {
      "gramsPerUnit": 28.0,
      "key": "matzo",
      "kind": "unit",
      "label": "matzo"
    }
  ],
  "name": "Crackers, matzo, egg",
  "nutritionPerBasis": {
    "calcium_mg": 40.0,
    "carbs_g": 78.6,
    "energy_kcal": 1640.0,
    "fat_g": 2.1,
    "fibre_g": 2.8,
    "folate_ug": 24.0,
    "iron_mg": 2.7,
    "magnesium_mg": 24.0,
    "omega3_g": 0.006,
    "phosphorus_mg": 148.0,
    "potassium_mg": 150.0,
    "protein_g": 12.3,
    "salt_g": 0.0525,
    "sat_fat_g": 0.548,
    "sodium_mg": 21.0,
    "sugar_g": 0.0,
    "vitamin_a_ug": 13.0,
    "vitamin_c_mg": 0.1,
    "vitamin_e_mg": 0.0,
    "vitamin_k_ug": 0.0
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "172741",
  "state": "Unspecified",
  "subcategory": "Baked Products",
  "tags": [
    "baked-products",
    "milk-dairy-and-eggs",
    "unspecified"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
