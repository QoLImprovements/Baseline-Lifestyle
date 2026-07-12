/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Grains, Bread & Pasta",
  "defaultMeasure": "serving",
  "description": "Restaurant Foods",
  "id": "usda-sr-legacy-168066",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 653.0,
      "key": "serving",
      "kind": "unit",
      "label": "serving"
    },
    {
      "gramsPerUnit": 115.0,
      "key": "cup",
      "kind": "unit",
      "label": "cup"
    }
  ],
  "name": "Restaurant, Latino, Arroz con grandules (rice and pigeonpeas)",
  "nutritionPerBasis": {
    "calcium_mg": 8.0,
    "carbs_g": 30.8,
    "energy_kcal": 182.0,
    "fat_g": 4.98,
    "fibre_g": 1.4,
    "folate_ug": 0.0,
    "iron_mg": 0.29,
    "magnesium_mg": 14.0,
    "omega3_g": 0.249,
    "phosphorus_mg": 54.0,
    "potassium_mg": 84.0,
    "protein_g": 3.5,
    "salt_g": 1.4575,
    "sat_fat_g": 0.763,
    "sodium_mg": 583.0,
    "sugar_g": 0.0,
    "vitamin_a_ug": 0.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 0.68,
    "vitamin_k_ug": 12.6
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "168066",
  "state": "Unspecified",
  "subcategory": "Restaurant Foods",
  "tags": [
    "grains-bread-and-pasta",
    "restaurant-foods",
    "unspecified"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
