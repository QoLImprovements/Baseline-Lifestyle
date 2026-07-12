/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Milk, Dairy & Eggs",
  "defaultMeasure": "container",
  "description": "Baby Foods",
  "id": "usda-sr-legacy-170990",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 69.0,
      "key": "container",
      "kind": "unit",
      "label": "container"
    },
    {
      "gramsPerUnit": 16.0,
      "key": "tbsp",
      "kind": "unit",
      "label": "tbsp"
    }
  ],
  "name": "Babyfood, yogurt, whole milk, with fruit, multigrain cereal and added iron fortified",
  "nutritionPerBasis": {
    "calcium_mg": 98.0,
    "carbs_g": 13.0,
    "energy_kcal": 385.0,
    "fat_g": 3.08,
    "fibre_g": 0.6,
    "folate_ug": 7.0,
    "iron_mg": 4.18,
    "magnesium_mg": 15.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 86.0,
    "potassium_mg": 143.0,
    "protein_g": 3.05,
    "salt_g": 0.095,
    "sat_fat_g": 1.58,
    "sodium_mg": 38.0,
    "sugar_g": 11.5,
    "vitamin_a_ug": 22.0,
    "vitamin_c_mg": 3.6,
    "vitamin_e_mg": 0.09,
    "vitamin_k_ug": 0.9
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "170990",
  "state": "Unspecified",
  "subcategory": "Baby Foods",
  "tags": [
    "baby-foods",
    "milk-dairy-and-eggs",
    "unspecified"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
