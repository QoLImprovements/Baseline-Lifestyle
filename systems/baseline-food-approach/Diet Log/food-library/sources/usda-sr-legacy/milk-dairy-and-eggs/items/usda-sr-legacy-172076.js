/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Milk, Dairy & Eggs",
  "defaultMeasure": "item",
  "description": "Fast Foods",
  "id": "usda-sr-legacy-172076",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 110.0,
      "key": "item",
      "kind": "unit",
      "label": "item"
    }
  ],
  "name": "BURGER KING, CROISSAN'WICH with Egg and Cheese",
  "nutritionPerBasis": {
    "calcium_mg": 231.0,
    "carbs_g": 24.8,
    "energy_kcal": 1180.0,
    "fat_g": 15.8,
    "fibre_g": 0.7,
    "folate_ug": 0.0,
    "iron_mg": 1.9,
    "magnesium_mg": 17.0,
    "omega3_g": 0.269,
    "phosphorus_mg": 249.0,
    "potassium_mg": 168.0,
    "protein_g": 10.4,
    "salt_g": 1.625,
    "sat_fat_g": 4.77,
    "sodium_mg": 650.0,
    "sugar_g": 4.03,
    "vitamin_a_ug": 0.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 1.11,
    "vitamin_k_ug": 9.5
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "172076",
  "state": "Unspecified",
  "subcategory": "Fast Foods",
  "tags": [
    "fast-foods",
    "milk-dairy-and-eggs",
    "unspecified"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
