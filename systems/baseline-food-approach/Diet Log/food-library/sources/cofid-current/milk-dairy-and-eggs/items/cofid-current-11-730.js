/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Milk, Dairy & Eggs",
  "defaultMeasure": "g",
  "description": "10 samples, 8 products, including ravioli, fagottini, tortellini",
  "id": "cofid-current-11-730",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    }
  ],
  "name": "Pasta, egg, fresh, filled with mushrooms, boiled in unsalted water",
  "nutritionPerBasis": {
    "calcium_mg": 85.0,
    "carbs_g": 27.1,
    "energy_kcal": 173.0,
    "fat_g": 4.3,
    "fibre_g": 1.9,
    "folate_ug": 10.0,
    "iron_mg": 0.85,
    "magnesium_mg": 18.0,
    "omega3_g": 0.03,
    "phosphorus_mg": 121.0,
    "potassium_mg": 116.0,
    "protein_g": 8.1,
    "salt_g": 0.53,
    "sat_fat_g": 2.27,
    "sodium_mg": 212.0,
    "sugar_g": 0.7,
    "vitamin_a_ug": 0.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 0.0,
    "vitamin_k_ug": 0.0
  },
  "source": "UK CoFID 2021",
  "sourceId": "11-730",
  "state": "Boiled",
  "subcategory": "AD",
  "tags": [
    "ad",
    "boiled",
    "milk-dairy-and-eggs"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
