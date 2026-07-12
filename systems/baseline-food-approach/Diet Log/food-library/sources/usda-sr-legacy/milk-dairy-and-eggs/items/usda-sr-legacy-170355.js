/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Milk, Dairy & Eggs",
  "defaultMeasure": "item",
  "description": "Fast Foods",
  "id": "usda-sr-legacy-170355",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 149.0,
      "key": "item",
      "kind": "unit",
      "label": "item"
    }
  ],
  "name": "Yogurt parfait, lowfat, with fruit and granola",
  "nutritionPerBasis": {
    "calcium_mg": 105.0,
    "carbs_g": 15.9,
    "energy_kcal": 351.0,
    "fat_g": 1.01,
    "fibre_g": 1.1,
    "folate_ug": 51.0,
    "iron_mg": 0.49,
    "magnesium_mg": 17.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 93.0,
    "potassium_mg": 189.0,
    "protein_g": 3.36,
    "salt_g": 0.1225,
    "sat_fat_g": 0.525,
    "sodium_mg": 49.0,
    "sugar_g": 11.7,
    "vitamin_a_ug": 30.0,
    "vitamin_c_mg": 14.3,
    "vitamin_e_mg": 0.25,
    "vitamin_k_ug": 1.7
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "170355",
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
