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
  "id": "usda-sr-legacy-172032",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 108.0,
      "key": "item",
      "kind": "unit",
      "label": "item"
    }
  ],
  "name": "Fast foods, english muffin, with cheese and sausage",
  "nutritionPerBasis": {
    "calcium_mg": 210.0,
    "carbs_g": 25.3,
    "energy_kcal": 338.0,
    "fat_g": 20.7,
    "fibre_g": 0.5,
    "folate_ug": 51.0,
    "iron_mg": 3.14,
    "magnesium_mg": 21.0,
    "omega3_g": 0.035,
    "phosphorus_mg": 168.0,
    "potassium_mg": 179.0,
    "protein_g": 13.3,
    "salt_g": 1.67,
    "sat_fat_g": 8.15,
    "sodium_mg": 668.0,
    "sugar_g": 1.98,
    "vitamin_a_ug": 56.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 0.58,
    "vitamin_k_ug": 2.2
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "172032",
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
