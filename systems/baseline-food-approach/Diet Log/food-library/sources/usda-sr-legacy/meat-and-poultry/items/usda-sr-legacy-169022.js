/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Meat & Poultry",
  "defaultMeasure": "serving",
  "description": "Restaurant Foods",
  "id": "usda-sr-legacy-169022",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 194.0,
      "key": "serving",
      "kind": "unit",
      "label": "serving"
    }
  ],
  "name": "DENNY'S, chicken strips",
  "nutritionPerBasis": {
    "calcium_mg": 11.0,
    "carbs_g": 22.0,
    "energy_kcal": 295.0,
    "fat_g": 14.5,
    "fibre_g": 1.1,
    "folate_ug": 14.0,
    "iron_mg": 0.72,
    "magnesium_mg": 30.0,
    "omega3_g": 0.775,
    "phosphorus_mg": 273.0,
    "potassium_mg": 334.0,
    "protein_g": 19.2,
    "salt_g": 1.995,
    "sat_fat_g": 2.58,
    "sodium_mg": 798.0,
    "sugar_g": 0.29,
    "vitamin_a_ug": 14.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 1.22,
    "vitamin_k_ug": 0.0
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "169022",
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
