/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Milk, Dairy & Eggs",
  "defaultMeasure": "item-5-2-oz",
  "description": "Fast Foods",
  "id": "usda-sr-legacy-172075",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 149.0,
      "key": "item-5-2-oz",
      "kind": "unit",
      "label": "item 5.2 oz"
    }
  ],
  "name": "McDONALD'S, Fruit 'n Yogurt Parfait",
  "nutritionPerBasis": {
    "calcium_mg": 86.0,
    "carbs_g": 20.7,
    "energy_kcal": 105.0,
    "fat_g": 1.3,
    "fibre_g": 1.0,
    "folate_ug": 13.0,
    "iron_mg": 0.45,
    "magnesium_mg": 14.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 84.0,
    "potassium_mg": 167.0,
    "protein_g": 2.73,
    "salt_g": 0.145,
    "sat_fat_g": 0.041,
    "sodium_mg": 58.0,
    "sugar_g": 12.8,
    "vitamin_a_ug": 59.0,
    "vitamin_c_mg": 13.9,
    "vitamin_e_mg": 0.0,
    "vitamin_k_ug": 0.0
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "172075",
  "state": "Unspecified",
  "subcategory": "Fast Foods",
  "tags": [
    "fast-foods",
    "milk-dairy-and-eggs",
    "unspecified"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
