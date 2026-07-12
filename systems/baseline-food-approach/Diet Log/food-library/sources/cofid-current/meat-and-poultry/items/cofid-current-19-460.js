/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Meat & Poultry",
  "defaultMeasure": "g",
  "description": "10 sub-samples, 2 from different establishments in each of 5 regions",
  "id": "cofid-current-19-460",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    }
  ],
  "name": "Stir-fry beef with green peppers and blackbean sauce, takeaway",
  "nutritionPerBasis": {
    "calcium_mg": 16.0,
    "carbs_g": 2.7,
    "energy_kcal": 103.0,
    "fat_g": 5.6,
    "fibre_g": 0.0,
    "folate_ug": 0.0,
    "iron_mg": 1.2,
    "magnesium_mg": 11.0,
    "omega3_g": 0.15,
    "phosphorus_mg": 73.0,
    "potassium_mg": 180.0,
    "protein_g": 10.5,
    "salt_g": 1.4425,
    "sat_fat_g": 1.37,
    "sodium_mg": 577.0,
    "sugar_g": 1.0,
    "vitamin_a_ug": 40.0,
    "vitamin_c_mg": 6.0,
    "vitamin_e_mg": 1.14,
    "vitamin_k_ug": 0.0
  },
  "source": "UK CoFID 2021",
  "sourceId": "19-460",
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
