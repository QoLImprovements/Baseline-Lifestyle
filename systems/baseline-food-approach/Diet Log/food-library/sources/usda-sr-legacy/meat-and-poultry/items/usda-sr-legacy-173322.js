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
  "id": "usda-sr-legacy-173322",
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
  "name": "Fast foods, bagel, with egg, sausage patty, cheese, and condiments",
  "nutritionPerBasis": {
    "calcium_mg": 94.0,
    "carbs_g": 22.6,
    "energy_kcal": 1240.0,
    "fat_g": 17.0,
    "fibre_g": 0.2,
    "folate_ug": 53.0,
    "iron_mg": 1.77,
    "magnesium_mg": 20.0,
    "omega3_g": 0.037,
    "phosphorus_mg": 185.0,
    "potassium_mg": 123.0,
    "protein_g": 13.0,
    "salt_g": 1.375,
    "sat_fat_g": 6.4,
    "sodium_mg": 550.0,
    "sugar_g": 2.87,
    "vitamin_a_ug": 64.0,
    "vitamin_c_mg": 0.5,
    "vitamin_e_mg": 0.64,
    "vitamin_k_ug": 2.8
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "173322",
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
