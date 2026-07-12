/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Meat & Poultry",
  "defaultMeasure": "serving-5-pieces",
  "description": "Fast Foods",
  "id": "usda-sr-legacy-170731",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 173.0,
      "key": "serving-5-pieces",
      "kind": "unit",
      "label": "serving 5 pieces"
    },
    {
      "gramsPerUnit": 36.0,
      "key": "strip",
      "kind": "unit",
      "label": "strip"
    }
  ],
  "name": "BURGER KING, Chicken Strips",
  "nutritionPerBasis": {
    "calcium_mg": 13.0,
    "carbs_g": 20.5,
    "energy_kcal": 1220.0,
    "fat_g": 15.2,
    "fibre_g": 1.3,
    "folate_ug": 9.0,
    "iron_mg": 0.62,
    "magnesium_mg": 27.0,
    "omega3_g": 0.301,
    "phosphorus_mg": 291.0,
    "potassium_mg": 315.0,
    "protein_g": 18.2,
    "salt_g": 2.1475,
    "sat_fat_g": 2.7,
    "sodium_mg": 859.0,
    "sugar_g": 0.0,
    "vitamin_a_ug": 3.0,
    "vitamin_c_mg": 1.1,
    "vitamin_e_mg": 3.93,
    "vitamin_k_ug": 6.3
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "170731",
  "state": "Unspecified",
  "subcategory": "Fast Foods",
  "tags": [
    "fast-foods",
    "meat-and-poultry",
    "unspecified"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
