/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Meat & Poultry",
  "defaultMeasure": "burrito",
  "description": "Fast Foods",
  "id": "usda-sr-legacy-170735",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 241.0,
      "key": "burrito",
      "kind": "unit",
      "label": "burrito"
    }
  ],
  "name": "TACO BELL, BURRITO SUPREME with beef",
  "nutritionPerBasis": {
    "calcium_mg": 90.0,
    "carbs_g": 23.4,
    "energy_kcal": 765.0,
    "fat_g": 6.8,
    "fibre_g": 3.7,
    "folate_ug": 45.0,
    "iron_mg": 1.82,
    "magnesium_mg": 23.0,
    "omega3_g": 0.206,
    "phosphorus_mg": 131.0,
    "potassium_mg": 204.0,
    "protein_g": 7.03,
    "salt_g": 1.1275,
    "sat_fat_g": 2.73,
    "sodium_mg": 451.0,
    "sugar_g": 2.1,
    "vitamin_a_ug": 52.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 0.28,
    "vitamin_k_ug": 5.4
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "170735",
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
