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
  "id": "usda-sr-legacy-172302",
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
    },
    {
      "gramsPerUnit": 8.8,
      "key": "scope",
      "kind": "unit",
      "label": "scope"
    }
  ],
  "name": "Infant formula, MEAD JOHNSON, ENFAMIL, Infant, with iron, powder, with ARA and DHA",
  "nutritionPerBasis": {
    "calcium_mg": 400.0,
    "carbs_g": 56.2,
    "energy_kcal": 511.0,
    "fat_g": 27.0,
    "fibre_g": 0.0,
    "folate_ug": 83.0,
    "iron_mg": 9.3,
    "magnesium_mg": 41.0,
    "omega3_g": 0.089,
    "phosphorus_mg": 270.0,
    "potassium_mg": 560.0,
    "protein_g": 10.8,
    "salt_g": 0.3475,
    "sat_fat_g": 11.2,
    "sodium_mg": 139.0,
    "sugar_g": 56.0,
    "vitamin_a_ug": 470.0,
    "vitamin_c_mg": 62.0,
    "vitamin_e_mg": 6.9,
    "vitamin_k_ug": 41.0
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "172302",
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
