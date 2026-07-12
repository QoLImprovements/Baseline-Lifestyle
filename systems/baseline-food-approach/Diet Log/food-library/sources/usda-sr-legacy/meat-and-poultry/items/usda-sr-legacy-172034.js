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
  "id": "usda-sr-legacy-172034",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 165.0,
      "key": "item",
      "kind": "unit",
      "label": "item"
    }
  ],
  "name": "Fast foods, english muffin, with egg, cheese, and sausage",
  "nutritionPerBasis": {
    "calcium_mg": 168.0,
    "carbs_g": 17.4,
    "energy_kcal": 286.0,
    "fat_g": 18.1,
    "fibre_g": 0.2,
    "folate_ug": 57.0,
    "iron_mg": 2.63,
    "magnesium_mg": 17.0,
    "omega3_g": 0.122,
    "phosphorus_mg": 180.0,
    "potassium_mg": 147.0,
    "protein_g": 13.4,
    "salt_g": 1.37,
    "sat_fat_g": 6.93,
    "sodium_mg": 548.0,
    "sugar_g": 1.49,
    "vitamin_a_ug": 70.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 0.94,
    "vitamin_k_ug": 1.5
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "172034",
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
