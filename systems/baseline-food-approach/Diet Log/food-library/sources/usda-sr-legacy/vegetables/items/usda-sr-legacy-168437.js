/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Vegetables",
  "defaultMeasure": "cup-pieces",
  "description": "Vegetables and Vegetable Products",
  "id": "usda-sr-legacy-168437",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 145.0,
      "key": "cup-pieces",
      "kind": "unit",
      "label": "cup pieces"
    },
    {
      "gramsPerUnit": 72.0,
      "key": "4-mushrooms",
      "kind": "unit",
      "label": "4 mushrooms"
    }
  ],
  "name": "Mushrooms, shiitake, cooked, without salt",
  "nutritionPerBasis": {
    "calcium_mg": 3.0,
    "carbs_g": 14.4,
    "energy_kcal": 56.0,
    "fat_g": 0.22,
    "fibre_g": 2.1,
    "folate_ug": 21.0,
    "iron_mg": 0.44,
    "magnesium_mg": 14.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 29.0,
    "potassium_mg": 117.0,
    "protein_g": 1.56,
    "salt_g": 0.01,
    "sat_fat_g": 0.05,
    "sodium_mg": 4.0,
    "sugar_g": 3.84,
    "vitamin_a_ug": 0.0,
    "vitamin_c_mg": 0.3,
    "vitamin_e_mg": 0.0,
    "vitamin_k_ug": 0.0
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "168437",
  "state": "Cooked",
  "subcategory": "Vegetables and Vegetable Products",
  "tags": [
    "cooked",
    "vegetables",
    "vegetables-and-vegetable-products"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
