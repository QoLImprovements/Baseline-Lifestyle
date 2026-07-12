/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Fruit",
  "defaultMeasure": "package-1-nlea-serving",
  "description": "Breakfast Cereals",
  "id": "usda-sr-legacy-171685",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 70.0,
      "key": "package-1-nlea-serving",
      "kind": "unit",
      "label": "package (1 NLEA serving)"
    }
  ],
  "name": "Cereals, QUAKER, oatmeal, REAL MEDLEYS, summer berry, dry",
  "nutritionPerBasis": {
    "calcium_mg": 124.0,
    "carbs_g": 72.6,
    "energy_kcal": 1480.0,
    "fat_g": 4.4,
    "fibre_g": 8.5,
    "folate_ug": 39.0,
    "iron_mg": 3.13,
    "magnesium_mg": 113.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 358.0,
    "potassium_mg": 445.0,
    "protein_g": 11.3,
    "salt_g": 0.885,
    "sat_fat_g": 1.04,
    "sodium_mg": 354.0,
    "sugar_g": 20.4,
    "vitamin_a_ug": 19.0,
    "vitamin_c_mg": 9.4,
    "vitamin_e_mg": 0.47,
    "vitamin_k_ug": 0.0
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "171685",
  "state": "Unspecified",
  "subcategory": "Breakfast Cereals",
  "tags": [
    "breakfast-cereals",
    "fruit",
    "unspecified"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
