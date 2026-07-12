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
  "id": "usda-sr-legacy-170325",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 310.0,
      "key": "item",
      "kind": "unit",
      "label": "item"
    }
  ],
  "name": "WENDY'S, CLASSIC DOUBLE, with cheese",
  "nutritionPerBasis": {
    "calcium_mg": 58.0,
    "carbs_g": 11.7,
    "energy_kcal": 1010.0,
    "fat_g": 14.2,
    "fibre_g": 1.1,
    "folate_ug": 0.0,
    "iron_mg": 2.94,
    "magnesium_mg": 19.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 134.0,
    "potassium_mg": 214.0,
    "protein_g": 16.5,
    "salt_g": 1.055,
    "sat_fat_g": 5.89,
    "sodium_mg": 422.0,
    "sugar_g": 0.0,
    "vitamin_a_ug": 0.0,
    "vitamin_c_mg": 0.7,
    "vitamin_e_mg": 0.0,
    "vitamin_k_ug": 6.9
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "170325",
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
