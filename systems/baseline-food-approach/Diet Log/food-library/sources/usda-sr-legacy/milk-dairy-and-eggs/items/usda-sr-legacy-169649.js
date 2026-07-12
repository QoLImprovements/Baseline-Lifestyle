/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Milk, Dairy & Eggs",
  "defaultMeasure": "0-5-cup",
  "description": "Sweets",
  "id": "usda-sr-legacy-169649",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 127.0,
      "key": "0-5-cup",
      "kind": "unit",
      "label": "0.5 cup"
    }
  ],
  "name": "Puddings, banana, dry mix, instant, prepared with whole milk",
  "nutritionPerBasis": {
    "calcium_mg": 94.0,
    "carbs_g": 19.8,
    "energy_kcal": 480.0,
    "fat_g": 2.8,
    "fibre_g": 0.0,
    "folate_ug": 4.0,
    "iron_mg": 0.05,
    "magnesium_mg": 9.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 206.0,
    "potassium_mg": 112.0,
    "protein_g": 2.62,
    "salt_g": 0.725,
    "sat_fat_g": 1.56,
    "sodium_mg": 290.0,
    "sugar_g": 17.4,
    "vitamin_a_ug": 38.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 0.06,
    "vitamin_k_ug": 0.2
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "169649",
  "state": "Unspecified",
  "subcategory": "Sweets",
  "tags": [
    "milk-dairy-and-eggs",
    "sweets",
    "unspecified"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
