/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Other Foods",
  "defaultMeasure": "bar",
  "description": "Snacks",
  "id": "usda-sr-legacy-174795",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 60.0,
      "key": "bar",
      "kind": "unit",
      "label": "bar"
    }
  ],
  "name": "Snacks, granola bars, QUAKER OATMEAL TO GO, all flavors",
  "nutritionPerBasis": {
    "calcium_mg": 333.0,
    "carbs_g": 75.5,
    "energy_kcal": 389.0,
    "fat_g": 6.67,
    "fibre_g": 4.6,
    "folate_ug": 75.0,
    "iron_mg": 6.0,
    "magnesium_mg": 69.0,
    "omega3_g": 0.01,
    "phosphorus_mg": 167.0,
    "potassium_mg": 238.0,
    "protein_g": 6.67,
    "salt_g": 0.9175,
    "sat_fat_g": 1.3,
    "sodium_mg": 367.0,
    "sugar_g": 31.5,
    "vitamin_a_ug": 236.0,
    "vitamin_c_mg": 0.9,
    "vitamin_e_mg": 2.25,
    "vitamin_k_ug": 6.9
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "174795",
  "state": "Unspecified",
  "subcategory": "Snacks",
  "tags": [
    "other-foods",
    "snacks",
    "unspecified"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
