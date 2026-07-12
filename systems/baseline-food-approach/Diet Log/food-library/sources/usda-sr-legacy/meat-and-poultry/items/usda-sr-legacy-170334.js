/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Meat & Poultry",
  "defaultMeasure": "item",
  "description": "Fast Foods",
  "id": "usda-sr-legacy-170334",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 248.0,
      "key": "item",
      "kind": "unit",
      "label": "item"
    }
  ],
  "name": "TACO BELL, BURRITO SUPREME with chicken",
  "nutritionPerBasis": {
    "calcium_mg": 94.0,
    "carbs_g": 20.5,
    "energy_kcal": 179.0,
    "fat_g": 6.42,
    "fibre_g": 2.4,
    "folate_ug": 48.0,
    "iron_mg": 1.56,
    "magnesium_mg": 28.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 163.0,
    "potassium_mg": 264.0,
    "protein_g": 9.84,
    "salt_g": 1.41,
    "sat_fat_g": 2.35,
    "sodium_mg": 564.0,
    "sugar_g": 0.0,
    "vitamin_a_ug": 4.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 0.42,
    "vitamin_k_ug": 5.3
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "170334",
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
