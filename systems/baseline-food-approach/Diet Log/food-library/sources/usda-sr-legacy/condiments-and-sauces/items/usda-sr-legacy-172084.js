/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Condiments & Sauces",
  "defaultMeasure": "item",
  "description": "Fast Foods",
  "id": "usda-sr-legacy-172084",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 219.0,
      "key": "item",
      "kind": "unit",
      "label": "item"
    }
  ],
  "name": "Fast foods, cheeseburger; double, regular patty; double decker bun with condiments and special sauce",
  "nutritionPerBasis": {
    "calcium_mg": 127.0,
    "carbs_g": 21.5,
    "energy_kcal": 1090.0,
    "fat_g": 14.1,
    "fibre_g": 1.4,
    "folate_ug": 27.0,
    "iron_mg": 1.4,
    "magnesium_mg": 25.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 136.0,
    "potassium_mg": 182.0,
    "protein_g": 11.9,
    "salt_g": 1.2125,
    "sat_fat_g": 5.04,
    "sodium_mg": 485.0,
    "sugar_g": 3.26,
    "vitamin_a_ug": 27.0,
    "vitamin_c_mg": 0.3,
    "vitamin_e_mg": 0.06,
    "vitamin_k_ug": 16.4
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "172084",
  "state": "Unspecified",
  "subcategory": "Fast Foods",
  "tags": [
    "condiments-and-sauces",
    "fast-foods",
    "unspecified"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
