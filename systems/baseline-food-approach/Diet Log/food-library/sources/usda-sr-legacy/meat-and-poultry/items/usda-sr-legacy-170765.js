/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Meat & Poultry",
  "defaultMeasure": "each-quesadilla",
  "description": "Fast Foods",
  "id": "usda-sr-legacy-170765",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 180.0,
      "key": "each-quesadilla",
      "kind": "unit",
      "label": "each quesadilla"
    }
  ],
  "name": "Fast foods, quesadilla, with chicken",
  "nutritionPerBasis": {
    "calcium_mg": 269.0,
    "carbs_g": 24.0,
    "energy_kcal": 294.0,
    "fat_g": 15.2,
    "fibre_g": 1.7,
    "folate_ug": 52.0,
    "iron_mg": 1.77,
    "magnesium_mg": 25.0,
    "omega3_g": 0.468,
    "phosphorus_mg": 313.0,
    "potassium_mg": 183.0,
    "protein_g": 15.0,
    "salt_g": 1.8625,
    "sat_fat_g": 6.15,
    "sodium_mg": 745.0,
    "sugar_g": 1.88,
    "vitamin_a_ug": 72.0,
    "vitamin_c_mg": 0.1,
    "vitamin_e_mg": 0.29,
    "vitamin_k_ug": 2.4
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "170765",
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
