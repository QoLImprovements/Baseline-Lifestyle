/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Beverages",
  "defaultMeasure": "bottle",
  "description": "Beverages",
  "id": "usda-sr-legacy-173171",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 295.0,
      "key": "bottle",
      "kind": "unit",
      "label": "bottle"
    }
  ],
  "name": "Beverages, UNILEVER, SLIMFAST, meal replacement, regular, ready-to-drink, 3-2-1 Plan",
  "nutritionPerBasis": {
    "calcium_mg": 161.0,
    "carbs_g": 7.74,
    "energy_kcal": 238.0,
    "fat_g": 1.93,
    "fibre_g": 1.6,
    "folate_ug": 39.0,
    "iron_mg": 0.87,
    "magnesium_mg": 45.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 161.0,
    "potassium_mg": 193.0,
    "protein_g": 3.32,
    "salt_g": 0.17,
    "sat_fat_g": 0.54,
    "sodium_mg": 68.0,
    "sugar_g": 5.95,
    "vitamin_a_ug": 170.0,
    "vitamin_c_mg": 19.4,
    "vitamin_e_mg": 4.58,
    "vitamin_k_ug": 6.5
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "173171",
  "state": "Unspecified",
  "subcategory": "Beverages",
  "tags": [
    "beverages",
    "unspecified"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
