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
  "id": "usda-sr-legacy-169857",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 339.0,
      "key": "serving",
      "kind": "unit",
      "label": "serving"
    }
  ],
  "name": "CARRABBA'S ITALIAN GRILL, chicken parmesan without cavatappi pasta",
  "nutritionPerBasis": {
    "calcium_mg": 142.0,
    "carbs_g": 7.8,
    "energy_kcal": 861.0,
    "fat_g": 11.0,
    "fibre_g": 0.9,
    "folate_ug": 22.0,
    "iron_mg": 0.78,
    "magnesium_mg": 30.0,
    "omega3_g": 0.136,
    "phosphorus_mg": 235.0,
    "potassium_mg": 319.0,
    "protein_g": 19.0,
    "salt_g": 1.1675,
    "sat_fat_g": 3.52,
    "sodium_mg": 467.0,
    "sugar_g": 2.89,
    "vitamin_a_ug": 53.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 1.89,
    "vitamin_k_ug": 0.0
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "169857",
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
