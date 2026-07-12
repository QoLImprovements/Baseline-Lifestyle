/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Meat & Poultry",
  "defaultMeasure": "g",
  "description": "10 samples, 2 from different establishments in each of 5 regions.",
  "id": "cofid-current-18-499",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    }
  ],
  "name": "Pork, spare ribs, Chinese barbecue, takeaway",
  "nutritionPerBasis": {
    "calcium_mg": 48.0,
    "carbs_g": 0.0,
    "energy_kcal": 0.0,
    "fat_g": 18.7,
    "fibre_g": 0.0,
    "folate_ug": 0.0,
    "iron_mg": 1.92,
    "magnesium_mg": 15.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 116.0,
    "potassium_mg": 213.0,
    "protein_g": 22.1,
    "salt_g": 1.2125,
    "sat_fat_g": 0.0,
    "sodium_mg": 485.0,
    "sugar_g": 0.0,
    "vitamin_a_ug": 11.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 0.84,
    "vitamin_k_ug": 0.0
  },
  "source": "UK CoFID 2021",
  "sourceId": "18-499",
  "state": "Unspecified",
  "subcategory": "MAG",
  "tags": [
    "mag",
    "meat-and-poultry",
    "unspecified"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
