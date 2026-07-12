/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Other Foods",
  "defaultMeasure": "rusk",
  "description": "Baby Foods",
  "id": "usda-sr-legacy-171372",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 10.0,
      "key": "rusk",
      "kind": "unit",
      "label": "rusk"
    },
    {
      "gramsPerUnit": 7.0,
      "key": "piece",
      "kind": "unit",
      "label": "piece"
    },
    {
      "gramsPerUnit": 28.35,
      "key": "oz",
      "kind": "unit",
      "label": "oz"
    },
    {
      "gramsPerUnit": 7.0,
      "key": "toast-gerber-zwieback",
      "kind": "unit",
      "label": "toast, Gerber Zwieback"
    }
  ],
  "name": "Zwieback",
  "nutritionPerBasis": {
    "calcium_mg": 20.0,
    "carbs_g": 74.2,
    "energy_kcal": 1780.0,
    "fat_g": 9.7,
    "fibre_g": 2.5,
    "folate_ug": 87.0,
    "iron_mg": 0.6,
    "magnesium_mg": 14.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 55.0,
    "potassium_mg": 305.0,
    "protein_g": 10.1,
    "salt_g": 0.5675,
    "sat_fat_g": 2.52,
    "sodium_mg": 227.0,
    "sugar_g": 12.5,
    "vitamin_a_ug": 16.0,
    "vitamin_c_mg": 5.3,
    "vitamin_e_mg": 2.44,
    "vitamin_k_ug": 0.9
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "171372",
  "state": "Unspecified",
  "subcategory": "Baby Foods",
  "tags": [
    "baby-foods",
    "other-foods",
    "unspecified"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
