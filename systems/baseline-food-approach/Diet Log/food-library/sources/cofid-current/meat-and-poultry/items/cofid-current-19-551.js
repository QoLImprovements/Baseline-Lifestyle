/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Meat & Poultry",
  "defaultMeasure": "g",
  "description": "Recipe",
  "id": "cofid-current-19-551",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    }
  ],
  "name": "Beef Stroganoff, homemade",
  "nutritionPerBasis": {
    "calcium_mg": 30.0,
    "carbs_g": 2.5,
    "energy_kcal": 171.0,
    "fat_g": 11.2,
    "fibre_g": 0.6,
    "folate_ug": 11.0,
    "iron_mg": 1.56,
    "magnesium_mg": 21.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 177.0,
    "potassium_mg": 355.0,
    "protein_g": 15.3,
    "salt_g": 0.135,
    "sat_fat_g": 6.22,
    "sodium_mg": 54.0,
    "sugar_g": 2.1,
    "vitamin_a_ug": 93.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 0.25,
    "vitamin_k_ug": 0.49
  },
  "source": "UK CoFID 2021",
  "sourceId": "19-551",
  "state": "Unspecified",
  "subcategory": "MR",
  "tags": [
    "meat-and-poultry",
    "mr",
    "unspecified"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
