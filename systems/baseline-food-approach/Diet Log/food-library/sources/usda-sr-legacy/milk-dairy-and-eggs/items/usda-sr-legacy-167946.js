/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Milk, Dairy & Eggs",
  "defaultMeasure": "bar",
  "description": "Sweets",
  "id": "usda-sr-legacy-167946",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 35.0,
      "key": "bar",
      "kind": "unit",
      "label": "bar"
    }
  ],
  "name": "SCHIFF,TIGER'S MILK BAR",
  "nutritionPerBasis": {
    "calcium_mg": 429.0,
    "carbs_g": 56.5,
    "energy_kcal": 1620.0,
    "fat_g": 14.3,
    "fibre_g": 2.3,
    "folate_ug": 55.0,
    "iron_mg": 10.3,
    "magnesium_mg": 336.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 560.0,
    "potassium_mg": 294.0,
    "protein_g": 16.8,
    "salt_g": 0.42,
    "sat_fat_g": 2.07,
    "sodium_mg": 168.0,
    "sugar_g": 36.4,
    "vitamin_a_ug": 1.0,
    "vitamin_c_mg": 16.8,
    "vitamin_e_mg": 2.48,
    "vitamin_k_ug": 4.6
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "167946",
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
