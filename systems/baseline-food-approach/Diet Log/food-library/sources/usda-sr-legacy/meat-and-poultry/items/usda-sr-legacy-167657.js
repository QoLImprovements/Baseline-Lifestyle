/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Meat & Poultry",
  "defaultMeasure": "serving-varied-from-2-3-tacos-per-serving",
  "description": "Restaurant Foods",
  "id": "usda-sr-legacy-167657",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 324.0,
      "key": "serving-varied-from-2-3-tacos-per-serving",
      "kind": "unit",
      "label": "serving varied from 2-3 tacos per serving"
    }
  ],
  "name": "ON THE BORDER, soft taco with ground beef, cheese and lettuce",
  "nutritionPerBasis": {
    "calcium_mg": 123.0,
    "carbs_g": 19.3,
    "energy_kcal": 229.0,
    "fat_g": 11.0,
    "fibre_g": 1.8,
    "folate_ug": 40.0,
    "iron_mg": 1.94,
    "magnesium_mg": 30.0,
    "omega3_g": 0.061,
    "phosphorus_mg": 188.0,
    "potassium_mg": 274.0,
    "protein_g": 13.2,
    "salt_g": 1.615,
    "sat_fat_g": 4.85,
    "sodium_mg": 646.0,
    "sugar_g": 1.84,
    "vitamin_a_ug": 4.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 0.44,
    "vitamin_k_ug": 0.0
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "167657",
  "state": "Unspecified",
  "subcategory": "Restaurant Foods",
  "tags": [
    "meat-and-poultry",
    "restaurant-foods",
    "unspecified"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
