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
  "id": "usda-sr-legacy-173551",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 8.5,
      "key": "scoop",
      "kind": "unit",
      "label": "scoop"
    }
  ],
  "name": "Infant formula, NESTLE, GOOD START ESSENTIALS SOY, with iron, powder",
  "nutritionPerBasis": {
    "calcium_mg": 526.0,
    "carbs_g": 55.7,
    "energy_kcal": 2100.0,
    "fat_g": 25.5,
    "fibre_g": 0.0,
    "folate_ug": 80.0,
    "iron_mg": 9.0,
    "magnesium_mg": 55.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 316.0,
    "potassium_mg": 581.0,
    "protein_g": 12.5,
    "salt_g": 0.45,
    "sat_fat_g": 11.0,
    "sodium_mg": 180.0,
    "sugar_g": 44.4,
    "vitamin_a_ug": 466.0,
    "vitamin_c_mg": 60.1,
    "vitamin_e_mg": 7.34,
    "vitamin_k_ug": 40.1
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "173551",
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
