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
  "id": "usda-sr-legacy-173270",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 155.0,
      "key": "item",
      "kind": "unit",
      "label": "item"
    }
  ],
  "name": "Fast foods, croissant, with egg, cheese, and ham",
  "nutritionPerBasis": {
    "calcium_mg": 95.0,
    "carbs_g": 19.0,
    "energy_kcal": 261.0,
    "fat_g": 15.0,
    "fibre_g": 0.9,
    "folate_ug": 42.0,
    "iron_mg": 1.4,
    "magnesium_mg": 17.0,
    "omega3_g": 0.021,
    "phosphorus_mg": 221.0,
    "potassium_mg": 179.0,
    "protein_g": 12.4,
    "salt_g": 1.7775,
    "sat_fat_g": 5.16,
    "sodium_mg": 711.0,
    "sugar_g": 5.42,
    "vitamin_a_ug": 146.0,
    "vitamin_c_mg": 0.1,
    "vitamin_e_mg": 0.76,
    "vitamin_k_ug": 2.1
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "173270",
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
