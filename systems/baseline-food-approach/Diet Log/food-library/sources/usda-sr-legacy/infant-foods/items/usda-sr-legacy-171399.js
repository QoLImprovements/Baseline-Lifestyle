/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Infant Foods",
  "defaultMeasure": "scoop",
  "description": "Baby Foods",
  "id": "usda-sr-legacy-171399",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 9.5,
      "key": "scoop",
      "kind": "unit",
      "label": "scoop"
    }
  ],
  "name": "Infant formula, ABBOTT NUTRITION, SIMILAC, For Spit Up, powder, with ARA and DHA",
  "nutritionPerBasis": {
    "calcium_mg": 432.0,
    "carbs_g": 55.0,
    "energy_kcal": 514.0,
    "fat_g": 27.8,
    "fibre_g": 0.0,
    "folate_ug": 77.0,
    "iron_mg": 9.3,
    "magnesium_mg": 31.0,
    "omega3_g": 0.085,
    "phosphorus_mg": 288.0,
    "potassium_mg": 550.0,
    "protein_g": 11.0,
    "salt_g": 0.385,
    "sat_fat_g": 18.0,
    "sodium_mg": 154.0,
    "sugar_g": 55.0,
    "vitamin_a_ug": 467.0,
    "vitamin_c_mg": 46.0,
    "vitamin_e_mg": 6.93,
    "vitamin_k_ug": 41.0
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "171399",
  "state": "Unspecified",
  "subcategory": "Baby Foods",
  "tags": [
    "baby-foods",
    "infant-foods",
    "unspecified"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
