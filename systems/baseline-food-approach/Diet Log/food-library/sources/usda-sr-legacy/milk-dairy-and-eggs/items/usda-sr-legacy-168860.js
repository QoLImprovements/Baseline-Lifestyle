/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Milk, Dairy & Eggs",
  "defaultMeasure": "oz",
  "description": "Snacks",
  "id": "usda-sr-legacy-168860",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 28.35,
      "key": "oz",
      "kind": "unit",
      "label": "oz"
    }
  ],
  "name": "Cheese puffs and twists, corn based, baked, low fat",
  "nutritionPerBasis": {
    "calcium_mg": 357.0,
    "carbs_g": 72.4,
    "energy_kcal": 432.0,
    "fat_g": 12.1,
    "fibre_g": 3.6,
    "folate_ug": 97.0,
    "iron_mg": 1.28,
    "magnesium_mg": 41.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 357.0,
    "potassium_mg": 286.0,
    "protein_g": 8.5,
    "salt_g": 2.105,
    "sat_fat_g": 2.1,
    "sodium_mg": 842.0,
    "sugar_g": 7.29,
    "vitamin_a_ug": 44.0,
    "vitamin_c_mg": 21.4,
    "vitamin_e_mg": 4.25,
    "vitamin_k_ug": 1.1
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "168860",
  "state": "Baked",
  "subcategory": "Snacks",
  "tags": [
    "baked",
    "milk-dairy-and-eggs",
    "snacks"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
