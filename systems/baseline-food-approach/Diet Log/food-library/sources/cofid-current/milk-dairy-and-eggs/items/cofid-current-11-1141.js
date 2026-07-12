/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Milk, Dairy & Eggs",
  "defaultMeasure": "g",
  "description": "Recipe",
  "id": "cofid-current-11-1141",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    }
  ],
  "name": "Pancakes, sweet, made with skimmed milk, homemade",
  "nutritionPerBasis": {
    "calcium_mg": 116.0,
    "carbs_g": 37.9,
    "energy_kcal": 234.0,
    "fat_g": 7.4,
    "fibre_g": 1.0,
    "folate_ug": 11.0,
    "iron_mg": 0.78,
    "magnesium_mg": 15.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 118.0,
    "potassium_mg": 174.0,
    "protein_g": 6.3,
    "salt_g": 0.1275,
    "sat_fat_g": 1.22,
    "sodium_mg": 51.0,
    "sugar_g": 17.0,
    "vitamin_a_ug": 17.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 3.13,
    "vitamin_k_ug": 0.57
  },
  "source": "UK CoFID 2021",
  "sourceId": "11-1141",
  "state": "Unspecified",
  "subcategory": "AS",
  "tags": [
    "as",
    "milk-dairy-and-eggs",
    "unspecified"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
