/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Beverages",
  "defaultMeasure": "g",
  "description": "10 samples, 8 brand, premium and from concentrate including 'smooth' and 'with bits'",
  "id": "cofid-current-14-329",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    }
  ],
  "name": "Orange juice, chilled",
  "nutritionPerBasis": {
    "calcium_mg": 8.0,
    "carbs_g": 8.6,
    "energy_kcal": 36.0,
    "fat_g": 0.0,
    "fibre_g": 0.0,
    "folate_ug": 22.0,
    "iron_mg": 0.07,
    "magnesium_mg": 9.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 15.0,
    "potassium_mg": 158.0,
    "protein_g": 0.9,
    "salt_g": 0.0025,
    "sat_fat_g": 0.0,
    "sodium_mg": 1.0,
    "sugar_g": 8.6,
    "vitamin_a_ug": 7.0,
    "vitamin_c_mg": 40.0,
    "vitamin_e_mg": 0.15,
    "vitamin_k_ug": 0.0
  },
  "source": "UK CoFID 2021",
  "sourceId": "14-329",
  "state": "Unspecified",
  "subcategory": "FC",
  "tags": [
    "beverages",
    "fc",
    "unspecified"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
